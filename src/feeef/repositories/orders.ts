import vine from '@vinejs/vine'
import { InferInput } from '@vinejs/vine/types'
import { AxiosInstance } from 'axios'
import { CreateOrderSchema, SendOrderSchema } from '../validators/order.js'
import { ModelRepository } from './repository.js'
import { OrderEntity } from '../../core/entities/order.js'
/**
 * Represents the options for tracking an order.
 */
export interface OrderModelTrackOptions {
  id: string
  params?: Record<string, any>
}
/**
 * Represents a repository for managing orders.
 */
export class OrderRepository extends ModelRepository<
  OrderEntity,
  InferInput<typeof CreateOrderSchema>,
  InferInput<typeof CreateOrderSchema>
> {
  /**
   * Constructs a new OrderRepository instance.
   * @param client - The AxiosInstance used for making HTTP requests.
   */
  constructor(client: AxiosInstance) {
    super('orders', client)
  }

  /**
   * Sends an order from an anonymous user.
   * @param data - The data representing the order to be sent.
   * @returns A Promise that resolves to the sent OrderEntity.
   */
  async send(data: InferInput<typeof SendOrderSchema>): Promise<OrderEntity> {
    const validator = vine.compile(SendOrderSchema)
    const output = await validator.validate(data)
    const res = await this.client.post(`/${this.resource}/send`, output)

    // Return the sent OrderEntity
    return res.data
  }

  /**
   * track the order by the order id
   * it will return the order status and history
   * @param options - The options for finding the model.
   * @returns A promise that resolves to the found model.
   */
  async track(options: OrderModelTrackOptions): Promise<OrderEntity> {
    const { id, params } = options
    const res = await this.client.get(`/${this.resource}/${id}`, {
      params: {
        ...params,
      },
    })
    return res.data
  }
}

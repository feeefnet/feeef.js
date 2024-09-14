import { InferInput } from '@vinejs/vine/types'
import { AxiosInstance } from 'axios'
import { CreateProductSchema, UpdateProductSchema } from '../validators/product.js'
import { ModelRepository } from './repository.js'
import { ProductEntity } from '../../core/entities/product.js'

/**
 * Represents a repository for managing products.
 */
export class ProductRepository extends ModelRepository<
  ProductEntity,
  InferInput<typeof CreateProductSchema>,
  InferInput<typeof UpdateProductSchema>
> {
  /**
   * Creates a new instance of the ProductRepository class.
   * @param client - The AxiosInstance used for making HTTP requests.
   */
  constructor(client: AxiosInstance) {
    super('products', client)
  }
}

import { Schema, model, Document, Types } from 'mongoose'

export interface IProduct extends Document {
  categoryId: Types.ObjectId
  productName: string
  slug: string
  material?: string
  description?: string
  wholesalePrice?: number
  imageUrl: string
  imageGallery: string[]
  isFeatured: boolean
  isActive: boolean
  createdAt?: Date
  updatedAt?: Date
}

const productSchema = new Schema<IProduct>(
  {
    categoryId: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    productName: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true },
    material: { type: String, default: '' },
    description: { type: String, default: '' },
    wholesalePrice: { type: Number, default: 0 },
    imageUrl: { type: String, required: true },
    imageGallery: [{ type: String }],
    isFeatured: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true }
  },
  { timestamps: true }
)

export const Product = model<IProduct>('Product', productSchema)

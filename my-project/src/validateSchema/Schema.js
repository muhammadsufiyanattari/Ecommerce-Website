// import * as z from 'zod';
import { z } from "zod";

 const schema = z.object({
  productName: z.string().min(3, { message:"Requrid  minimum 3 characters " }).max(20),
  productCategary: z.string()({ message:"Requrid  minimum 3 characters " }),
  price: z.string().min(2, {  message:"Requrid  Price"}),
  stock: z.string().min(2, {message:"Requrid Product Quantiiy"  })
//   age: z.number().min(10),
});
export default schema
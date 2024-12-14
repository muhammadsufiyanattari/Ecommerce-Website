// import * as z from 'zod';
import { z } from "zod";

 const schema = z.object({
  productName: z.string().min(3, { message: 'ejfbejbf' }).max(20)
//   age: z.number().min(10),
});
export default schema
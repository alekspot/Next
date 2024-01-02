import Link from 'next/link'
import { headers } from 'next/headers'
 
export default async function NotFound() {
 
  return (
    <div>
      <h2></h2>
      <p>Could not find requested resource</p>
      <p>
        View <Link href="/">НА главную</Link>
      </p>
    </div>
  )
}
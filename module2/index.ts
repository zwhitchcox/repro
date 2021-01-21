import { y } from 'module3'
export const x = () => {
  console.log('running from module 2')
  y()
}
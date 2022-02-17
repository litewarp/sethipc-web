// https://discord.com/channels/885877446098964512/885877446891667529/940012012648398859
// implementation comes from https://github.com/radix-ui/primitives/blob/main/packages/react/primitive/src/Primitive.tsx
import { sprinkles, Sprinkles } from './sprinkles.css'

export function isSprinklesProp(key: string): key is keyof Sprinkles {
  return sprinkles.properties.has(key as keyof Sprinkles)
}

export function getSprinklesProps<T extends { [key: string]: any }>(props: T) {
  const sprinklesProps: { [key: string]: unknown } = {}
  const nativeProps: { [key: string]: unknown } = {}

  for (const key in props) {
    if (isSprinklesProp(key)) {
      sprinklesProps[key] = props[key as keyof typeof props]
    } else {
      nativeProps[key] = props[key as keyof typeof props]
    }
  }
  return {
    sprinklesProps,
    nativeProps
  }
}

import merge from 'deepmerge'
import { createGlobalTheme, createGlobalThemeContract } from '@vanilla-extract/css'

import { Mode, tokens } from '../tokens'
import { Theme } from './types'

const { colors, ...restTokens } = tokens

const baseTokens: Omit<Theme, 'colors' | 'mode'> = restTokens

const baseVars = createGlobalThemeContract(baseTokens)

createGlobalTheme(':root', baseVars, baseTokens)

const colorTokens = tokens['colors']['light']
const colorVars = createGlobalThemeContract(colorTokens)

createGlobalTheme('[data-theme="light"]', colorVars, colorTokens)
createGlobalTheme('[data-theme="dark"]', colorVars, tokens['colors']['dark'])

type ThemeVars = typeof baseVars & typeof colorVars
export const vars = merge(baseVars, colorVars) as ThemeVars

import { IconProp } from "@fortawesome/fontawesome-svg-core"

interface GENERATION_ICON {
  [key: string]: IconProp
}
export const GENERATION_ICONS: GENERATION_ICON = {
  biomass: "tree",
  coal: "table-cells",
  imports: "globe",
  gas: "gas-pump",
  nuclear: "atom",
  other: "diagram-project",
  hydro: "water",
  solar: "solar-panel",
  wind: "wind"
}
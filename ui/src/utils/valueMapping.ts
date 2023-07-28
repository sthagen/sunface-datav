import { ValueMappingItem } from "types/dashboard";
import { isEmpty } from "./validate";

export const mapValueToText = (value: number | string, mapping: ValueMappingItem[]) => {
    let text;
    for (const m of mapping) {
        if (m.type == "value" && m.value == value) {
            text = m.text
            break
        } else if (m.type == "range" && value >= m.value.from && value <= m.value.to) {
            text = m.text
            break
        } else if (m.type == "null" && isEmpty(value)) {
            text = m.text
            break
        } else if (m.type == "regex" && value.toString().match(m.value)) {
            text = m.text
            break
        }
    }

    return text
}
export function getCustomProperty(elem, prop){
    return parseFloat(getComputedStyle(elem).getPropertyValue(prop)) || 0

}

export function setCustomProperty(elem, props, value){
    elem.style.setProperty(prop, value)
}

export function incrementCustomProperty(elem, prop, inc){
    setCustomProperty(elem, props, getCustomProperty(elem,prop)+ inc)

}
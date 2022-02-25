import React, { useState } from 'react'


function If(props) {

    if (props.test) {
        return props.children
    } else {
        return false
    }

}

export default If

//é possivel passar função array boolean etc dentro de uma props
// esse test será uma expressão booleana
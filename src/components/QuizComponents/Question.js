import React, { useState } from 'react'

export const Question = ({ Questions, index }) => {
    return (
        <div>
            <p>{Questions[index]}</p>
        </div>
    )
}

import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                color: 'lightGreen', // Цвет слайдера
                width: 500,
                '& .MuiSlider-thumb': { // Стили для "большого пальца" слайдера
                    backgroundColor: 'lightGreen',
                    height: 24,
                    width: 24,
                    '&:hover': {
                        boxShadow: 'inherit', // Тень при наведении
                    },
                },
                '& .MuiSlider-track': { // Стили для дорожки слайдера
                    height: 8,
                    borderRadius: 4,
                },
                '& .MuiSlider-rail': { // Стили для рельса слайдера
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: 'grey',
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange

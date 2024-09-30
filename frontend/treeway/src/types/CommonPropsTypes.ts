import { IconType } from 'react-icons';

export type RoundButton = {
    icon?: IconType
    alt: string
    imgSrc?: string
    onClick?: () => void
}

export type RoundBtnGroupProps = {
    buttons: RoundButton[]
    direction: 'row' | 'column' | 'single'
}

export type MenuItemProps = {
    icon: JSX.Element
    label: string
    index : number
}
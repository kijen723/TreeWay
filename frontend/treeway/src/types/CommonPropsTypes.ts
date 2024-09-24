import { IconType } from 'react-icons';

export type Button = {
    icon?: IconType
    alt: string
    imgSrc?: string
    onClick?: () => void
}

export type BtnGroupProps = {
    buttons: Button[]
    direction: 'row' | 'column'
}

export type MenuItemProps = {
    icon: JSX.Element
    label: string
}
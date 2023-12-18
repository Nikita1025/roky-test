import React, { ReactElement, ReactNode, useState } from 'react'

import { VectorIcon } from '@/assets/icon/vectorIcon'
import * as Select from '@radix-ui/react-select'

import styles from './selectBox.module.css'

export type SelectProps = {
  children?: ReactNode
  defaultImage?: ReactElement
  defaultValue?: string
  disabled?: boolean
  label?: string
  onBlur?: () => void
  onChange?: (e: any) => void
  onValueChange?: (value: number | string) => void
  options: Options[]
  placeholder?: string
  required?: boolean
  value?: string
}

export type Options = {
  cities?: string
  image?: ReactElement
  value: string
}

export const SelectBox = ({
  defaultValue,
  disabled,
  label,
  onChange,
  onValueChange,
  options,
  placeholder,
  required,
}: SelectProps) => {
  const [value, setValue] = useState(defaultValue ? defaultValue.toString() : '')

  const s = {
    label: styles.label,
    line: styles.line,
    placeholder: styles.placeholder,
    selectBox: styles.selectBox,
    selectContent: styles.selectContent,
    selectIcon: styles.selectIcon,
    value: styles.value,
  }
  const onChangeHandler = (newValue: string) => {
    setValue(newValue)
    onValueChange?.(newValue)
    onChange?.(newValue)
  }

  return (
    <Select.Root
      defaultValue={value}
      disabled={disabled}
      onValueChange={onChangeHandler}
      required={required}
      value={defaultValue}
    >
      {label ? <span className={s.label}>{label}</span> : ''}
      <Select.Trigger asChild className={s.selectBox} tabIndex={0}>
        <div>
          <span className={s.value}>{value ? value : defaultValue}</span>
          {!value && <span className={s.placeholder}>{placeholder}</span>}

          <Select.Icon asChild>
            <VectorIcon className={s.selectIcon} />
          </Select.Icon>
        </div>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className={s.selectContent} position={'popper'}>
          <Select.Viewport>
            {options?.map((el, idx) => (
              <Select.Item className={s.line} key={idx} value={el.value.toString()}>
                {el.image}
                <Select.ItemText>{el.value}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}

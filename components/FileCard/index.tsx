import React from 'react'
import styles from './FileCard.module.scss'
import { getExtensionFromFileName } from '@/utils/getExtensionFromFileName'
import { getColorByExtension } from '@/utils/getColorByExtension'
import { FileTextOutlined } from '@ant-design/icons'

interface FileCardProps {
  filename: string
  originalName: string
}

export const FileCard: React.FC<FileCardProps> = ({
  originalName,
  filename,
}) => {
  const ext = getExtensionFromFileName(filename)

  const color = getColorByExtension(ext)
  const classColor = styles[color]

  return (
    <div className={styles.root}>
      <div className={styles.icon}>
        <i className={classColor}>{ext}</i>

        <FileTextOutlined />
      </div>
      <span>{originalName}</span>
    </div>
  )
}

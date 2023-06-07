import React from 'react'
import styles from './FileCard.module.scss'

interface FileCardProps {
  filename: string
  originalName: string
}

export const FileCard: React.FC<FileCardProps> = ({
  originalName,
  filename,
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.icon}>
        <i></i>
        <img className={styles.image} src={'.'} alt="File" />
      </div>
      <span>{originalName}</span>
    </div>
  )
}

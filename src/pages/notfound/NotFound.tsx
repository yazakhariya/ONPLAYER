import error from 'src/assets/error.png'
import s from './NotFound.module.css'

export default function NotFound() {
  return (
    <div className={s.wrapper}>
      <img className={s.error} src={error} />
    </div>
  )
}

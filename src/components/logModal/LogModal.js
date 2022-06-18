import styles from './logModal.module.css';
import Button from '../button';

import UserService from '../../services/UserService'

const LogModal = () => {
    const newRequest = new UserService();

    newRequest.postData({
        "email": "john@mail.com"
      })
      .then(item => console.log(item))


    return (
        <div className={styles.modal__wrapper}>
            <div className={styles.modal__block}>
                <div className={styles.modal__title}>
                    Авторизация
                </div>
                <div>
                    <label htmlFor="e-mail">E-mail</label>
                    <input type="text" name="e-mail" id="e-mail"/>
                    <label htmlFor="password">Пароль</label>
                    <input type="password" name="password" id="password" />
                </div>
                <div className={styles.modal__btns}>
                    <Button
                        value={'Войти'}/>
                    <Button
                        value={'Отмена'}/>
                </div>
            </div>
        </div>
    )
}

export default LogModal;
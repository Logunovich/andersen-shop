import styles from './logModal.module.css';
import { useState } from 'react';

import Button from '../button';
import UserService from '../../services/UserService';

const LogModal = ({toggelOpenModal}) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const onChangeValue = (e, setFunction) => {
        setFunction(e.target.value)
    }

    const newRequest = new UserService();

    const loginRequest = () => {
        newRequest.login({
            "email": login,
            "password": password
          })
          .then(item => console.log(!!item.access_token))
    }

    return (
        <div className={styles.modal__wrapper}>
            <div className={styles.modal__block}>
                <div className={styles.modal__title}>
                    Авторизация
                </div>
                <div className={styles.modal__blocks}>
                    <label className={styles.modal__label} htmlFor="e-mail">E-mail</label>
                    <input 
                        className={styles.modal__input} 
                        placeholder='E-mail'
                        value={login}
                        onChange={(e) => onChangeValue(e, setLogin)}
                        type="text" 
                        name="e-mail" 
                        id="e-mail"/>
                    <label className={styles.modal__label} htmlFor="password">Пароль</label>
                    <input 
                        className={styles.modal__input}  
                        value={password}
                        onChange={(e) => onChangeValue(e, setPassword)}
                        placeholder='Пароль'
                        type="password" 
                        name="password" 
                        id="password" />
                </div>
                <div className={styles.modal__btns}>
                    <div className={styles.modal_btn}>
                      <Button
                        handle={loginRequest}
                        value={'Войти'}/>
                    </div> 
                    <div className={styles.modal_btn}>
                      <Button
                        handle={toggelOpenModal}
                        value={'Отмена'}/>
                    </div> 
                </div>
                <div className={styles.close__btn} onClick={toggelOpenModal}>×</div>
            </div>
        </div>
    )
}

export default LogModal;
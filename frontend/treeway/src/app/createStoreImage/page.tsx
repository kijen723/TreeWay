'use client'

import Button from '../common/Button';
import HeaderText from './components/HeaderText';
import InputForm from './components/InputForm'
import styles from './page.module.scss'

export default function CreateStoreImage() {
    const handleSubmitBtn = () => {
        console.log("분석하기");
    }

    return (
        <div className={styles.background}>
            <div className={styles.block}>
                <div className={styles.formBlock}>
                    <HeaderText />
                    <InputForm />
                    <Button content="분석하기" size="medium" colorType="blue" onClick={handleSubmitBtn} />
                </div>
            </div>
        </div>
    )
}
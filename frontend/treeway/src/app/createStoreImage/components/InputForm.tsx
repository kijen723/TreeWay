import { useState } from "react";
import styles from "../page.module.scss"
import FormField from "@/app/regist/components/FormField";

export default function InputForm() {
    const [budget, setBudget] = useState('');

    const handleBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBudget(e.target.value);
    };

    return (
        <div className={styles.formArea}>
            <FormField
                label="지역"
                htmlFor="region"
                type="text"
                value="이미 설정된 지역"
                onChange={() => { }}
                disabled={true}
            />
            <FormField
                label="업종"
                htmlFor="business"
                type="text"
                value="이미 설정된 업종"
                onChange={() => { }}
                disabled={true}
            />
            <FormField
                label="예산"
                htmlFor="budget"
                type="text"
                value={budget}
                onChange={handleBudgetChange}
            />   
        </div>
    )
}
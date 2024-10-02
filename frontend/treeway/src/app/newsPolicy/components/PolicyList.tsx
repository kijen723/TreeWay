import styles from '../page.module.scss';

interface PolicyItem {
    PolicyName: string;
    Description: string;
    EffectiveDate: string;
    PolicyNumber: string;
    Link: string;
}

interface PolicyListProps {
    policyData: PolicyItem[];
}

export default function PolicyList({ policyData }: PolicyListProps) {
    return (
        <div className={styles.policyList}>
            {policyData.map((policy, index) => (
                <div key={index} className={styles.policyItem}>
                    <h3>{policy.PolicyName}</h3>
                    <p>{policy.Description}</p>
                    <span>{policy.EffectiveDate}</span>
                    <span>{policy.PolicyNumber}</span>
                    <a href={policy.Link} target="_blank" rel="noopener noreferrer">정책 보기</a>
                </div>
            ))}
        </div>
    );
}

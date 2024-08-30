import { FC } from 'react';
import './BuyerList.scss';

interface UserDetail {
    id: number;
    name: string;
}

interface BuyerListProps {
    users_detail?: UserDetail[];
}

const BuyerList: FC<BuyerListProps> = ({ users_detail = [] }) => {
    return (
        <div className="buyer-list-container">
            <div className="buyer-list-row">
                <button className="buyer-list-button">Add Buyer</button>
                {users_detail.length > 0 && users_detail.map((buyer) => (
                    <div key={buyer.id} className="buyer-list-col">
                        <div className="buyer-list-item">
                            {buyer.name}
                        </div>
                    </div>
                ))}
                <button className="buyer-list-button">+1</button>
            </div>
        </div>
    );
};

export default BuyerList;

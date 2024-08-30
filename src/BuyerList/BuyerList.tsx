import React, { FC, useState, useRef, useEffect, useCallback } from 'react';
import './BuyerList.scss';

interface UserDetail {
  id: number;
  name: string;
}

interface BuyerListProps {
  users_detail?: UserDetail[];
}

const BuyerList: FC<BuyerListProps> = ({ users_detail = [] }) => {
  const [visibleBuyers, setVisibleBuyers] = useState<UserDetail[]>([]);
  const [hiddenBuyers, setHiddenBuyers] = useState<UserDetail[]>([]);
  const [showHidden, setShowHidden] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const updateVisibleBuyers = useCallback(() => {
    if (!containerRef.current) return;

    const containerWidth = containerRef.current.offsetWidth;
    let currentWidth = 0;
    const visible: UserDetail[] = [];
    const hidden: UserDetail[] = [];
    const itemWidth = 220; // Увеличьте ширину, чтобы учесть отступы и границы

    for (const buyer of users_detail) {
      if (currentWidth + itemWidth <= containerWidth) {
        visible.push(buyer);
        currentWidth += itemWidth;
      } else {
        hidden.push(buyer);
      }
    }

    setVisibleBuyers(visible);
    setHiddenBuyers(hidden);
  }, [users_detail]);

  useEffect(() => {
    updateVisibleBuyers();
    window.addEventListener('resize', updateVisibleBuyers);

    return () => {
      window.removeEventListener('resize', updateVisibleBuyers);
    };
  }, [updateVisibleBuyers]);

  return (
    <div className="buyer-list-container" ref={containerRef}>
      <div className="buyer-list-row">
        <button className="buyer-list-button">Add Buyer</button>
        {visibleBuyers.map((buyer) => (
          <div key={buyer.id} className="buyer-list-col">
            <div className="buyer-list-item">
              {buyer.name}
            </div>
          </div>
        ))}
        {hiddenBuyers.length > 0 && !showHidden && (
          <button className="buyer-list-button" onClick={() => setShowHidden(true)}>
            +{hiddenBuyers.length}
          </button>
        )}
        {showHidden && hiddenBuyers.map((buyer) => (
          <div key={buyer.id} className="buyer-list-col">
            <div className="buyer-list-item">
              {buyer.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyerList;
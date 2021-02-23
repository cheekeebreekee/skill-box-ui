import './index.scss';

export const LearningTabs = () => {
  return (
    <section className="learning-tabs">
      <div className="container">
        <ul className="learning-tabs__list">
          <li className="learning-tabs__list-item">Все</li>
          <li className="learning-tabs__list-item">Дизайн</li>
          <li className="learning-tabs__list-item">Код</li>
          <li className="learning-tabs__list-item">Геймдев</li>
          <li className="learning-tabs__list-item">Бизнес</li>
          <li className="learning-tabs__list-item">Маркетинг</li>
          <li className="learning-tabs__list-item">Управление</li>
          <li className="learning-tabs__list-item">Развитие</li>
          <li className="learning-tabs__list-item">Образование</li>
        </ul>
      </div>
    </section>
  );
}


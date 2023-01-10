import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export default function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.stat_list}>
        {stats.map(({ id, label, percentage }) => (
          <li key={id} className={css.item}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ).isRequired,
};

// {
//   /* <section class="statistics">
//   <h2 class="title">Upload stats</h2>
// {
//   /* <ul className={css.stat_list}>
//   <li className={css.item}>
//     <span className={css.label}>{label}</span>
//     <span className={css.percentage}>{percentage}</span>
//   </li>
//   <li className={css.item}>
//     <span className={css.label}>{label}</span>
//     <span className={css.percentage}>{percentage}</span>
//   </li>
//   <li className={css.item}>
//     <span className={css.label}>{label}</span>
//     <span className={css.percentage}>{percentage}</span>
//   </li>
//   <li className={css.item}>
//     <span className={css.label}>{label}</span>
//     <span className={css.percentage}>{percentage}</span>
//   </li>
// </ul>; */
// }
// </section>; */
// }

// Компонент должен принимать два пропа title и stats, в которых указывается заголовок и объект статистики.

// title - не обязателен, и если он не передан, не должна рендериться разметка заголовка <h2>.
// stats - массив объектов содержащих информацию о элементе статистики. Может иметь произвольное кол-во элементов.
// Цвет фона элемента статистики в оформлении можно пропустить, либо создать функцию для генерации случайного цвета.

// Пример использования
// import data from '/path/to/data.json';

// <Statistics title="Upload stats" stats={data} />
// <Statistics stats={data} />

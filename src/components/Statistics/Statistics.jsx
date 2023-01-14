import PropTypes from 'prop-types';
import css from './statistics.module.css';

const randomColor = () =>
  '#' + Math.floor(Math.random() * 16777215).toString(16);

export default function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.stat_list}>
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            className={css.item}
            style={{ backgroundColor: randomColor() }}
          >
            <span className={css.label}>{label} </span>
            <span className={css.percentage}>{percentage}%</span>
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

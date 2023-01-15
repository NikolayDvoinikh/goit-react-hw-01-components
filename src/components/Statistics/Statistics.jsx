import PropTypes from 'prop-types';
import css from './statistics.module.css';

const randomColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

export default function Statistics({ title, stats }) {
  const statisticElement = stats.map(({ id, label, percentage }) => (
    <li
      key={id}
      className={css.item}
      style={{ backgroundColor: randomColor() }}
    >
      <span className={css.label}>{label} </span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  ));
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.stat_list}>{statisticElement}</ul>
    </section>
  );
}

Statistics.defaultProps = {
  stats: [],
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

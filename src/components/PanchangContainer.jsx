import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../redux';
import Data from './Data';

function PanchangContainer({ data, fetchData, day, month, year, time }) {
  useEffect(() => {
    if (day && month && year && time) {
      fetchData(day, month, year, time);
    }
  }, [fetchData, day, month, year, time]);

  return data.loading ? (
    <h2>Loading...</h2>
  ) : data.error ? (
    <h2>{data.error}</h2>
  ) : (
    <div>
      <div>                                                                                                              
      {data && (
          <Data day = {day} year = {year} month = {month} data = {data} time = {time}/>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (day, month, year, time) => dispatch(fetchData(day, month, year, time)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PanchangContainer);

import $ from 'jquery';
import _ from 'lodash';
import './body.css';

let count = 0;

function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`);
}

$('body').append('<button>Click here to get started</button>');
$('body').append("<p id='count'></p>");

$('button').on('click', _.debounce(updateCounter, 500));

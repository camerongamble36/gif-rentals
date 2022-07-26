import Home from '../model/home.model';
import CommentModel from '../model/comment.model';

export const HOMES_LIST: Home[] = [
  new Home(
    Math.random().toString(),
    '../../assets/images/jpg/windsor_home.jpg',
    'Windsor Home',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut in justo, scelerisque aliquet nibh auctor facilisis. Malesuada purus pretium quam dictum. Elementum tortor et.',
    '1234 Address St, Dallas, Tx 75226',
    2100,
    4,
    3,
    [
      {
        title: 'Dishwasher',
        value: true,
      },
      {
        title: 'Washer/Dryer',
        value: true,
      },
      {
        title: 'Kitchen',
        value: true,
      },
      {
        title: 'Microwave',
        value: true,
      },
      {
        title: 'Backyard',
        value: true,
      },
      {
        title: 'Tile Floors',
        value: true,
      },
      {
        title: 'Parking Garage',
        value: true,
      },
      {
        title: 'Smart Home',
        value: true,
      },
      {
        title: 'Air Conditioning',
        value: true,
      },
      {
        title: 'Cable',
        value: false,
      },
      {
        title: 'Swimming Pool',
        value: false,
      },
      {
        title: 'Roof Deck',
        value: false,
      }
    ],
    [
      { title: 'Affordable', value: true },
      { title: 'Smart Home', value: true },
      { title: 'Web Portal', value: true },
    ], // Make this an enum?
    [
      new CommentModel(Math.random().toString(),  'Taylor Gamble', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id est in fames augue feugiat porttitor id dictum. Tortor, tincidunt cras orci est tortor ac interdum maecenas quis. Non massa, pellentesque vitae suspendisse aliquet proin elementum. Dictum id iaculis nec tincidunt. Pellentesque mi at sodales aliquet elementum nunc sem accumsan. Orci tempus augue mollis habitasse suspendisse. Est in.', 5, Date.now().toString(),),
      new CommentModel(Math.random().toString(),  'Kennedy Miller', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id est in fames augue feugiat porttitor id dictum. Tortor, tincidunt cras orci est tortor ac interdum maecenas quis. Non massa, pellentesque vitae suspendisse aliquet proin elementum. Dictum id iaculis nec tincidunt. Pellentesque mi at sodales aliquet elementum nunc sem accumsan. Orci tempus augue mollis habitasse suspendisse. Est in.', 4.5, new Date(2021, 12, 30).toString(),),
      new CommentModel(Math.random().toString(),  'Abigail Richardson', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id est in fames augue feugiat porttitor id dictum. Tortor, tincidunt cras orci est tortor ac interdum maecenas quis. Non massa, pellentesque vitae suspendisse aliquet proin elementum. Dictum id iaculis nec tincidunt. Pellentesque mi at sodales aliquet elementum nunc sem accumsan. Orci tempus augue mollis habitasse suspendisse. Est in.', 4.5, new Date(2020, 1, 1).toString(),),
    ]
  ),
  new Home(
    Math.random().toString(),
    '../../assets/images/jpg/ferguson_home.jpg',
    'Ferguson Home',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut in justo, scelerisque aliquet nibh auctor facilisis. Malesuada purus pretium quam dictum. Elementum tortor et.',    '1234 Address St, Dallas, Tx 75226',
    1800,
    3,
    2,
    [
      {
        title: 'Dishwasher',
        value: true,
      },
      {
        title: 'Washer/Dryer',
        value: true,
      },
      {
        title: 'Kitchen',
        value: true,
      },
      {
        title: 'Microwave',
        value: true,
      },
      {
        title: 'Backyard',
        value: true,
      },
      {
        title: 'Tile Floors',
        value: true,
      },
      {
        title: 'Parking Garage',
        value: true,
      },
      {
        title: 'Smart Home',
        value: true,
      },
      {
        title: 'Air Conditioning',
        value: true,
      },
      {
        title: 'Cable',
        value: false,
      },
      {
        title: 'Swimming Pool',
        value: false,
      },
      {
        title: 'Roof Deck',
        value: false,
      }
    ],
    [
      { title: 'Affordable', value: true },
      { title: 'Smart Home', value: true },
      { title: 'Web Portal', value: true },
    ], // Make this an enum?
    [
      new CommentModel(Math.random().toString(),  'Taylor Gamble', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id est in fames augue feugiat porttitor id dictum. Tortor, tincidunt cras orci est tortor ac interdum maecenas quis. Non massa, pellentesque vitae suspendisse aliquet proin elementum. Dictum id iaculis nec tincidunt. Pellentesque mi at sodales aliquet elementum nunc sem accumsan. Orci tempus augue mollis habitasse suspendisse. Est in.', 5, Date.now().toString(),),
      new CommentModel(Math.random().toString(),  'Kennedy Miller', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id est in fames augue feugiat porttitor id dictum. Tortor, tincidunt cras orci est tortor ac interdum maecenas quis. Non massa, pellentesque vitae suspendisse aliquet proin elementum. Dictum id iaculis nec tincidunt. Pellentesque mi at sodales aliquet elementum nunc sem accumsan. Orci tempus augue mollis habitasse suspendisse. Est in.', 4.5, new Date(2021, 12, 30).toString(),),
      new CommentModel(Math.random().toString(),  'Abigail Richardson', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id est in fames augue feugiat porttitor id dictum. Tortor, tincidunt cras orci est tortor ac interdum maecenas quis. Non massa, pellentesque vitae suspendisse aliquet proin elementum. Dictum id iaculis nec tincidunt. Pellentesque mi at sodales aliquet elementum nunc sem accumsan. Orci tempus augue mollis habitasse suspendisse. Est in.', 4.5, new Date(2020, 1, 1).toString(),),
    ]
  ),
  new Home(
    Math.random().toString(),
    '../../assets/images/jpg/halliburton_home.jpg',
    'Halliburton Home',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut in justo, scelerisque aliquet nibh auctor facilisis. Malesuada purus pretium quam dictum. Elementum tortor et.',
    '1234 Address St, Dallas, Tx 75226',
    2100,
    4,
    3,
    [
      {
        title: 'Dishwasher',
        value: true,
      },
      {
        title: 'Washer/Dryer',
        value: true,
      },
      {
        title: 'Kitchen',
        value: true,
      },
      {
        title: 'Microwave',
        value: true,
      },
      {
        title: 'Backyard',
        value: true,
      },
      {
        title: 'Tile Floors',
        value: true,
      },
      {
        title: 'Parking Garage',
        value: true,
      },
      {
        title: 'Smart Home',
        value: true,
      },
      {
        title: 'Air Conditioning',
        value: true,
      },
      {
        title: 'Cable',
        value: false,
      },
      {
        title: 'Swimming Pool',
        value: false,
      },
      {
        title: 'Roof Deck',
        value: false,
      }
    ],
    [
      { title: 'Affordable', value: true },
      { title: 'Smart Home', value: true },
      { title: 'Web Portal', value: true },
    ], // Make this an enum?
    [
      new CommentModel(Math.random().toString(),  'Taylor Gamble', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id est in fames augue feugiat porttitor id dictum. Tortor, tincidunt cras orci est tortor ac interdum maecenas quis. Non massa, pellentesque vitae suspendisse aliquet proin elementum. Dictum id iaculis nec tincidunt. Pellentesque mi at sodales aliquet elementum nunc sem accumsan. Orci tempus augue mollis habitasse suspendisse. Est in.', 5, Date.now().toString(),),
      new CommentModel(Math.random().toString(),  'Kennedy Miller', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id est in fames augue feugiat porttitor id dictum. Tortor, tincidunt cras orci est tortor ac interdum maecenas quis. Non massa, pellentesque vitae suspendisse aliquet proin elementum. Dictum id iaculis nec tincidunt. Pellentesque mi at sodales aliquet elementum nunc sem accumsan. Orci tempus augue mollis habitasse suspendisse. Est in.', 4.5, new Date(2021, 12, 30).toString(),),
      new CommentModel(Math.random().toString(),  'Abigail Richardson', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id est in fames augue feugiat porttitor id dictum. Tortor, tincidunt cras orci est tortor ac interdum maecenas quis. Non massa, pellentesque vitae suspendisse aliquet proin elementum. Dictum id iaculis nec tincidunt. Pellentesque mi at sodales aliquet elementum nunc sem accumsan. Orci tempus augue mollis habitasse suspendisse. Est in.', 4.5, new Date(2020, 1, 1).toString(),),
    ]
  ),
];

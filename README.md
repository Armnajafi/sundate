<div align="center">

<h1>sundate</h1>

<br>

 <a href="https://www.npmjs.com/package/sundate"><img src="https://nodei.co/npm/sundate.png?downloads=true&stars=true" alt="sundate download"></a>

 <br>

 <img src="https://img.shields.io/npm/dt/sundate.png">

</div>

<br>



## Installation

` npm install sundate@latest -g`

## Examples for use


Get a custom time date
```JS

import Sundate from "sundate"
 let sundate = new Sundate(1712941445900)
 console.log(sundate.show(false)) // show gregorian like : [1403 , 1 , 1]
 console.log(sundate.show(true)) // show shamsi like : [2024 , 3 , 13]

```


Get Currently Date
```JS

import Sundate from "sundate"
 let sundate = new Sundate()
 console.log(sundate.now(false)) // show gregorian like : [1403 , 1 , 1]
 console.log(sundate.now(true)) // show shamsi like : [2024 , 3 , 13]

```


## Report Bug
https://github.com/Armnajafi/sundate/issues
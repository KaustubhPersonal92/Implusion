import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
		<div className="footer">
			<p>Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved</p>
		</div>
	
    );
  }
}

export default Footer;

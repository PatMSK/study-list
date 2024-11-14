import React, { Component } from 'react';
import Clock from 'react-live-clock';

class Time extends Component {
    getGreeting() {
        const currentHour = new Date().getHours();
    
        if (currentHour < 12 && currentHour > 6) {
          return 'Good morning !';
        } else if (currentHour < 18 && currentHour > 12) {
          return 'Good afternoon !';
        } else {
          return 'Good evening !';
        }
      }

    render() {
    return (
        <div className="flex flex-col items-start text-white text-6xl p-3">
            <div className="mb-4">{this.getGreeting()}</div>
            <Clock 
                format={'HH : mm : ss'} 
                ticking={true} 
                timezone={'Bangkok'} 
                className="text-4xl"
            />
        </div>
    );
}
}

export default Time;

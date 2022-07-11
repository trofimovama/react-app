import React from 'react';
import { observable, action, makeAutoObservable } from 'mobx';
import axios, { AxiosPromise } from 'axios';

class LocalStore {
    day:string = this.getDay();
    month:string = this.getMonth();
    date:number = new Date().getDate();
    location:string = '';
    city:string = '';
    temp: number = 0;
    feels_like:number = 0;
    temp_min:number = 0;
    temp_max:number = 0;
    description:string = '';
    wind_speed:string = '';
    humidity:string = '';
    sunrise:string = '';
    sunset:string = '';
    iconUrl:string = 'http://openweathermap.org/img/wn/02d@2x.png';
    lat:string = '';
    lon:string = '';
    hourlyForecast:Array<{}> = [];
    dailyForecast:Array<{}> = [];
    icon:string = '';

    constructor() {
        makeAutoObservable(this, {
            location: observable,
            temp: observable,
            feels_like: observable,
            temp_min: observable,
            temp_max: observable,
            wind_speed: observable,
            humidity: observable,
            sunrise: observable,
            sunset: observable,
            icon: observable,
            iconUrl: observable,
            description: observable,
            lat: observable,
            lon: observable,
            day: observable,
            month: observable,
            
            getDay: action,
            getMonth: action,
            setCity: action,
            setLocation: action,
            getWeatherData: action,
            getHourlyForecast: action,
        });
    }

    componentDidMount():void {
        this.getDay();
        this.getMonth();
    }

    getDay ():string {
        const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        this.day = days[new Date().getDay()];
        
        return this.day;
    }

    getMonth ():string {
        const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        this.month = months[new Date().getMonth()];
        
        return this.month;
    }

    setLocation(location: string):void {
        this.location = location.charAt(0).toUpperCase() + location.slice(1);
    }

    setCity (city:string):void {
        this.city = city;
    }

    search = async (e:React.KeyboardEvent):Promise<void> => {
        if (e.key === 'Enter') {
            e.preventDefault();
      
            const weatherRes = await this.getWeatherData(this.city);
            await this.getHourlyForecast(weatherRes.data.coord.lat, weatherRes.data.coord.lon);
            this.setLocation(this.city);
            this.setCity('');
           }
        
    }

    getWeatherData(location:string):AxiosPromise {
      return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.REACT_APP_API_KEY}&lang=ru`)
        .then((res) => {
            console.log(res);
            
            this.temp = Math.round(parseInt(res.data.main.temp));
            this.feels_like = Math.round(parseInt(res.data.main.feels_like));
            this.temp_min = Math.round(parseInt(res.data.main.temp_min));
            this.temp_max = Math.round(parseInt(res.data.main.temp_max));
            this.wind_speed = res.data.wind.speed;
            this.humidity = res.data.main.humidity;
            this.sunrise = (new Date(res.data.sys.sunrise * 1000)).toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'});
            this.sunset = (new Date(res.data.sys.sunset * 1000)).toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'});
            this.description = res.data.weather[0].main;
            this.icon = res.data.weather[0].icon;
            this.iconUrl = `http://openweathermap.org/img/wn/${this.icon}@2x.png`;

            return res;
        })
    }

    getHourlyForecast(lat:string, lon:string):AxiosPromise {
        return axios.get(`http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}&lang=ru`)
        .then((response) => {
            console.log(response)
            this.hourlyForecast = response.data.hourly;
            this.dailyForecast = response.data.daily;

            return response;
        })
    }
}

export const Store = new LocalStore();

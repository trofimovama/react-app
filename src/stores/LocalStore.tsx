import React, { FormEvent } from 'react';
import { makeAutoObservable, configure } from 'mobx';
import axios, { AxiosPromise } from 'axios';

configure({
    enforceActions: "never",
})

export interface DailyData {
    dt:number;
    temp: {
        max: number;
        min: number;
    }
    weather: [
        {
            icon: string | undefined;
            description: string;
        }
    ]
}

export interface HourlyData {
    dt: number;
    temp: string;
    weather: [
        {
            main: string;
            icon: string | undefined;
            description: string;
        }
    ]
}

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
    lat:string = '';
    lon:string = '';
    hourlyForecast:HourlyData[] = [];
    dailyForecast:DailyData[] = [];
    icon:string = '';
    UrlIcon:string = 'http://openweathermap.org/img/wn/';
    UrlIconSize:string = '@2x.png';

    constructor() {
        makeAutoObservable(this);
    }

    getDay ():string {
        const DAYS_OF_WEEK = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        this.day = DAYS_OF_WEEK[new Date().getDay()];
        
        return this.day;
    }

    getMonth ():string {
        const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        this.month = MONTHS[new Date().getMonth()];
        
        return this.month;
    }

    setLocation(location: string):void {
        const _location = location.toLowerCase();
        this.location = _location.charAt(0).toUpperCase() + _location.slice(1);
    }

    setCity (city:string):void {
        this.city = city;
    }

    getValue = (e:FormEvent<HTMLInputElement>):void => {
        this.setCity(e.currentTarget.value)
    }

    clearData = () => {
        this.temp = 0;
        this.feels_like = 0;
        this.temp_min = 0;
        this.temp_max = 0;
        this.wind_speed = '';
        this.description = '';
        this.humidity = '';
        this.sunrise = '';
        this.sunset = '';
        this.hourlyForecast = [];
        this.dailyForecast = [];
    }

    search = async (e:React.KeyboardEvent):Promise<void> => {
        if (e.key === 'Enter') {
            e.preventDefault();
        
            try {
                const weatherRes = await this.getWeatherData(this.city.replace(/[0-9]/g, ''));
                await this.getHourlyForecast(weatherRes.data.coord.lat, weatherRes.data.coord.lon);
                this.setLocation(this.city);
                this.setCity('');
            } catch (err) {
                if (err instanceof Error) {
                   this.setLocation('Come on, man... Try again');
                   this.setCity('')
                   this.clearData()
                } 
            }  
        }   
    } 

    getWeatherData(location:string):AxiosPromise {
      return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.REACT_APP_API_KEY}&lang=ru`)
        .then((res) => {
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

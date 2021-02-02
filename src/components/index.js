import Vue from 'vue'
import PageWrapper from './page-wrapper'
import PageHeader from './page-header'
import Arrow from './arrow'


const components = [PageWrapper, PageHeader, Arrow]

components.forEach(item => {
   Vue.component(item.name, item) 
})
import { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts'

export function RadarChart({data, change}){
        const options= {
          chart: {
            height: 350,
            type: 'radar',
            dropShadow: {
              enabled: true,
              blur: 1,
              left: 1,
              top: 1
            }
          },
          title: {
            text: 'Radar del estudiante'
          },
          stroke: {
            width: 2
          },
          fill: {
            opacity: 0.1
          },
          markers: {
            size: 0
          },
          xaxis: {
            categories: ['Proc..', 'Conc..', 'Acti..']
          }
        }      


    const [series, setSeries] = useState([]);

    useEffect(()=>{

        console.log("fsa")

    let series = [];
    for(let i=0; i<data.number; i++){
        series.push({
            name:'Profesor '+(i+1),
            data:[data.pro[i],data.con[i],data.act[i]]
        })
    }

    setSeries(()=>{ return series});
    },[data, change])

    
    return(
        <div id="chart">
        <ReactApexChart options={options} series={series} type="radar" height={350} />
      </div>            
    )

}


export function Percentage({data, change}){

    
    let totalp = 0;
    data.pro.map((e)=>{
        totalp += parseInt(e);
    })

    let totalc = 0;
    data.con.map((e)=>{
        totalc += parseInt(e);
    })

    let totala = 0;
    data.act.map((e)=>{
        totala += parseInt(e);
    })

    console.log(totala,totalc,totalp);

    totala = totala / data.number *0.2
    totalp = totalp / data.number * 0.4
    totalc = totalc / data.number *0.4


    

    const dataF = {          
        series: [totala+totalc+totalp],
        options: {
          chart: {
            height: 350,
            type: 'radialBar',
            toolbar: {
              show: true
            }
          },
          plotOptions: {
            radialBar: {
              startAngle: -135,
              endAngle: 225,
               hollow: {
                margin: 0,
                size: '70%',
                background: '#fff',
                image: undefined,
                imageOffsetX: 0,
                imageOffsetY: 0,
                position: 'front',
                dropShadow: {
                  enabled: true,
                  top: 3,
                  left: 0,
                  blur: 4,
                  opacity: 0.24
                }
              },
              track: {
                background: '#fff',
                strokeWidth: '67%',
                margin: 0, // margin is in pixels
                dropShadow: {
                  enabled: true,
                  top: -3,
                  left: 0,
                  blur: 4,
                  opacity: 0.35
                }
              },
          
              dataLabels: {
                show: true,
                name: {
                  offsetY: -10,
                  show: true,
                  color: '#888',
                  fontSize: '17px'
                },
                value: {
                  formatter: function(val) {
                    return parseInt(val);
                  },
                  color: '#111',
                  fontSize: '36px',
                  show: true,
                }
              }
            }
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'dark',
              type: 'horizontal',
              shadeIntensity: 0.5,
              gradientToColors: ['#ABE5A1'],
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100]
            }
          },
          stroke: {
            lineCap: 'round'
          },
          labels: ['Calificación Final'],
        },      
      };

      return(
        <div id="chart2">
  <ReactApexChart options={dataF.options} series={dataF.series} type="radialBar" height={350} />
</div>
      )
}


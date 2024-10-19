export const chartColors = {
  default: {
    primary: '#00D1B2',
    info: '#209CEE',
    danger: '#FF3860',
    warning: '#FFDD57',
  }
}

const randomChartData = (n) => {
  const data = []

  for (let i = 0; i < n; i++) {
    data.push(Math.round(Math.random() * 200))
  }

  return data
}

export const assignData = (data, labels) => {

  return {
    labels,
    data
  }
}



const datasetObject = (color, data) => {
  return {
    fill: false,
    borderColor: chartColors.default[color],
    borderWidth: 2,
    borderDash: [],
    borderDashOffset: 0.0,
    pointBackgroundColor: chartColors.default[color],
    pointBorderColor: 'rgba(255,255,255,0)',
    pointHoverBackgroundColor: chartColors.default[color],
    pointBorderWidth: 20,
    pointHoverRadius: 4,
    pointHoverBorderWidth: 15,
    pointRadius: 4,
    data: data || randomChartData(5),
    tension: 0.5,
    cubicInterpolationMode: 'default'
  }
}

export const sampleChartData = (datasets, labels) => {
  return {
    labels,
    datasets
  }
}

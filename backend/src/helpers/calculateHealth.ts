//Import tools
import { IHealth } from '../models/HealthAnswersModel';

//Calculate Health Result
export const calculateHealth = (health: IHealth) => {
    let healthResult = 0;

    //Social Networks
    if (health.carousel) {
        healthResult += 2;
    }
    if (health.shortVideos) {
        healthResult += 2;
    }
    if (health.longVideos) {
        healthResult += 2;
    }
    if (health.automation) {
        healthResult += 10;
    }
    if (health.adsBudget) {
        healthResult += 10;
    }
    if (health.kpis) {
        healthResult += 4;
    }

    //Customer
    if (health.realCustomersCanal) {
        healthResult += 10;
    }
    if (health.realCustomersPercentage) {
        healthResult += 5;
    }
    if (health.realCustomerStrategy) {
        healthResult += 5;
    }

    //Marketing strategy
    if (health.marketingDepartment) {
        healthResult += 15;
    }
    if (health.marketingObjectives) {
        healthResult += 5;
    }

    //Web
    if (health.webUX) {
        healthResult += 20;
    }
    if (health.webTeam) {
        healthResult += 10;
    }

    return healthResult;
};

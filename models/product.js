class Product {
  constructor(
    id,
    category,
    type,
    brand,
    logoImageUrl,
    productImageUrl,
    origin,
    distance,
    distanceRate,
    energy,
    energyRate,
    grade,
    packages,
    isInList
  ) {
    this.id = id;
    this.category = category;
    this.type = type;
    this.brand = brand;
    this.logoImageUrl = logoImageUrl;
    this.productImageUrl = productImageUrl;
    this.origin = origin;
    this.distance = distance;
    this.distanceRate = distanceRate;
    this.energy = energy;
    this.energyRate = energyRate;
    this.grade = grade;
    this.packages = packages;
    this.isInList = isInList;
  }
}

export default Product;

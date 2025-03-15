// Mock Pi payment logic for TransAbuja Shuttle
// (Hypothetical—needs Pi SDK from Core Team)
const piApi = {
  transfer: async (tx) => console.log(`Tx: ${JSON.stringify(tx)}`)
};

async function payRide(route, distance, vehicleType) {
  const rate = vehicleType === 'mini-van' ? 0.01 : 0.02; // Pi/km
  const fare = distance * rate;
  await piApi.transfer({
    from: 'user_wallet',
    to: 'transabuja_wallet',
    amount: fare,
    memo: `Ride: ${route}`
  });
  return `Paid ${fare} Pi for ${route}`;
}

payRide('Zuba-Area 1', 25, 'mini-van'); // Test: 0.25 Pi

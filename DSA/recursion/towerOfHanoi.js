function towerOfHanoi(n, src, aux, dest) {
  if (n == 1) {
    console.log(`Disk ${n} moved from ${src} to ${dest}`);
    return;
  }

  towerOfHanoi(n - 1, src, dest, aux);
  console.log(`Disk ${n} moved from ${src} to ${dest}`);
  towerOfHanoi(n - 1, aux, src, dest);
}

towerOfHanoi(3, "A", "B", "C");

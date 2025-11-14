#include <iostream>
using namespace std;

int main()
{
    int pilihan, kwh, harga, ppn, bayar, beli, perKwh;

    cout << "+-+-+-+-+-+ Tagihan Listrik +-+-+-+-+-+ \n \n";
    cout << "1. Pra Bayar   (kWh) \n";
    cout << "2. Pasca Bayar (Token) \n";
    cout << "Pilih 1 atau 2: ";
    cin >> pilihan;

    if (pilihan == 1)
    {
        cout << "\n=========== Pra Bayar ===========\n \n";
        cout << "Masukkan Jumlah Pemakaian (kWh): ";
        cin >> kwh;

        if (kwh <= 10)
            perKwh = 8000;
        else if (kwh > 10 && kwh <= 20)
            perKwh = 15000;
        else if (kwh > 20 && kwh <= 50)
            perKwh = 20000;
        else
            perKwh = 25000;

        harga = perKwh * kwh;
        ppn = harga * 0.1;
        bayar = harga + ppn;

        cout << "PPN (10%)        : Rp " << ppn << "\n";
        cout << "Total Pembayaran : Rp " << bayar << "\n";
    }

    else if (pilihan == 2)
    {
        cout << "\n=========== Pasca Bayar (Token) ===========\n \n";
        cout << "Masukkan nominal token (Rp): ";
        cin >> beli;

        kwh = beli / 1000;
        ppn = beli * 0.1;
        bayar = beli + ppn;

        cout << "Jumlah kWh   : " << kwh << " kWh\n";
        cout << "PPN (10%)    : Rp " << ppn << "\n";
        cout << "Total bayar  : Rp " << bayar << "\n";
    }
    else
    {
        cout << "\n Salah input";
    }
    return 0;
}
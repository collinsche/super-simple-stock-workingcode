package SimpleStocks.Model;

import SimpleStocks.Exceptions.StockTypeNotFoundException;


public interface IStock {
    String GetStockSymbol();
StockType GetStockType();
int GetVariableDividend();
void SetVariableDividend(int variableDividend);
double GetFixedDividend();
void SetFixedDividend(int fixedDividend);
int GetParValue();
double CalculateDividendYield(double marketPrice) throws StockTypeNotFoundException;
double CalculatePERatio(double marketPrice) throws StockTypeNotFoundException;
}

/**Coded by Collins Che -26 Jan 2018   **/
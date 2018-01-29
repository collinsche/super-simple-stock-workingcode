package SimpleStocks.Model;

import java.util.Date;


public interface ITrade {
    IStock GetTradedStock();
Date GetTradeTimestamp();
int GetTradedQuantity();
TradeIndicator GetTradeIndicator();
double GetTradedPrice();
}

/**Coded by Collins Che -26 Jan 2018   **/
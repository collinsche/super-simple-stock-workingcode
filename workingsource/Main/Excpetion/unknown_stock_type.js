﻿

package SimpleStocks.Exceptions;


public class StockTypeNotFoundException extends Exception {
    public StockTypeNotFoundException() {
    }

    public StockTypeNotFoundException(Throwable cause) {
        super(cause);
    }

    public StockTypeNotFoundException(String message) {
        super(message);
    }

    public StockTypeNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }

    public StockTypeNotFoundException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}

/**Coded by Collins Che -26 Jan 2018   **/
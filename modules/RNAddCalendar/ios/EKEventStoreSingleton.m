//
//  EKEventStoreSingleton.m
//  modak_art
//
//  Created by Jesus Eduardo on 17/12/23.
//

#import <Foundation/Foundation.h>
#import "EKEventStoreSingleton.h"


@implementation EKEventStoreSingleton

#pragma mark Singleton Methods

+ (EKEventStore *)getInstance {
    static EKEventStore *sharedInstance = nil;
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        sharedInstance = [[EKEventStore alloc] init];
    });
    return sharedInstance;
}

@end

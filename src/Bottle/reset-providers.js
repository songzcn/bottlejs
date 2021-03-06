/**
 * Deletes providers from the map and container.
 *
 * @param String name
 * @return void
 */
var removeProviderMap = function resetProvider(name) {
    delete this.providerMap[name];
    delete this.container[name];
    delete this.container[name + PROVIDER_SUFFIX];
};

/**
 * Resets all providers on a bottle instance.
 *
 * @return void
 */
var resetProviders = function resetProviders() {
    var providers = this.originalProviders;
    Object.keys(this.originalProviders).forEach(function resetPrvider(provider) {
        var parts = provider.split(DELIMITER);
        if (parts.length > 1) {
            parts.forEach(removeProviderMap, getNestedBottle.call(this, parts[0]));
        }
        removeProviderMap.call(this, provider);
        this.provider(provider, providers[provider]);
    }, this);
};
